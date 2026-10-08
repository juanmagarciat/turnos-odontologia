# Método: SDD, OpenSpec y Active Stack

## Fuentes

Videos:

- https://www.youtube.com/watch?v=Bd424c06l4Q — SDD y OpenSpec.
- https://www.youtube.com/watch?v=Ox__FXSeomQ — Active Stack, parte 1.
- https://www.youtube.com/watch?v=eZgTpkSUJ4s — Active Stack, parte 2.
- https://www.youtube.com/watch?v=tja37Fk8epE — Active Stack, parte 3.

Presentaciones en Descargas:

- `presentacion-video-sdd-openspec.pdf`
- `presentacion-01-introductorio.pdf`
- `presentacion-02-flujo-de-trabajo.pdf`
- `presentacion-03-ciclo-en-accion.pdf`

Repositorio del instalador: https://github.com/Group-Active-IA/active-stack (MIT). Landing: https://active-stack-landing.vercel.app

## SDD

El contexto es la información disponible para el modelo, medida en tokens, con una ventana máxima. El vibe coding opera con prompts sueltos: contexto insuficiente o saturado, sin memoria entre sesiones y con alucinaciones.

Una especificación es un comportamiento verificable: requisito, escenario y resultado observable. Formato de la consigna, que es el que se evalúa: dado / cuando / entonces. Las diapositivas usan CUANDO / ENTONCES; se cubre ese formato dentro del de la consigna.

Ejemplo de la cátedra: requisito de autenticación; escenario de contraseña incorrecta; cuando hay un mail válido y una contraseña incorrecta, entonces el sistema informa credenciales inválidas y no inicia sesión.

OpenSpec es un CLI, no un agente. Es la fuente de verdad del estado de los cambios, en archivos de texto. `openspec init` no instala el CLI: inicializa `openspec/changes/`, `openspec/specs/` y `openspec/archive/`, y deja skills o comandos que el agente detecta.

Comandos de las diapositivas: `/opsx:explore`, `/opsx:propose <nombre>`, `/opsx:apply`, `/opsx:archive`. Explore es opcional en el framework si el cambio ya está claro. En este trabajo es obligatorio y se guarda el relevamiento. Apply ejecuta `tasks.md` y lo marca. Archive sincroniza `openspec/specs/` y mueve el change a `archive/`.

La consigna y Active Stack agregan verify como quinta fase. El ciclo de este trabajo es explore, propose, apply, verify, archive.

Las diapositivas describen OPSX como re-entrante. La fundación de este trabajo es bloqueante: ninguna etapa empieza sin aprobar la anterior. El orden de la consigna manda: repositorio vacío, Full, orchestrator, Discovery en Sí, fundación completa, después un solo change.

## Active Stack

Instalador en Go que inyecta harnesses en Claude Code, Codex u OpenCode. No tiene adapter para Cursor. Este trabajo usa Claude Code.

Tres tipos:

- Skill: `SKILL.md` clonado al instalar. Ejemplos: active-orchestrator, kb-creator, roadmap-generator.
- Config: empaquetado en el binario. SDD Orchestrator y Permissions. Permissions no se desactiva en ningún modo.
- External: OpenSpec CLI, Engram (SQLite con búsqueda de texto completo, vía MCP), Context7 (MCP de documentación de librerías).

Modos, según el README del repositorio:

- Lite: OpenSpec, Engram, Context7, SDD Orchestrator, Permissions.
- Full: Lite más active-orchestrator, kb-creator, roadmap-generator, find-skill, skill-registry, agent-instruction y skill-creator.
- Custom: selección granular, con Permissions forzado.

La lista efectiva es la del binario instalado. No se afirma un harness que el instalador no haya dejado.

Instalación documentada:

```bash
git clone https://github.com/Group-Active-IA/active-stack.git
go build -o active-stack ./cmd/active-stack
active-stack install --mode full --agent claude
```

El video menciona un modo de permisos bypass en la TUI. El README leído no documenta ese flag. Se consulta `active-stack install --help` antes de pasar argumentos que no estén publicados.

Requisitos ya comprobados el 2026-10-07 en esta máquina: Git 2.55, Node v24.20.0, Go 1.26.6, Claude Code presente, OpenCode ausente. La autenticación de Claude Code no estaba comprobada en esa fecha: se verifica al instalar.

## Fundación

`/active-orchestrator` despacha siete etapas. Cada skill tiene repositorio y versión propios. El orquestador coordina y no absorbe el trabajo pesado.

1. OpenSpec Init.
2. Discovery, solo si se responde Sí.
3. KB Creator. Silencioso si existe `docs/`. Si no, de 3 a 5 preguntas estratégicas por ronda. Diez archivos canónicos, más archivos de dominio si hacen falta.
4. Roadmap Generator. Exige knowledge-base y OpenSpec. Produce dependencias, asignación con contexto, camino crítico y riesgos.
5. Find Skill. Tabla de nombre, fuente y por qué encaja. No instala.
6. Skill Registry. Resume cada skill en 5 a 15 líneas accionables en `.atl/skill-registry.md`, para Claude Code, OpenCode, Gemini CLI, Cursor y Copilot.
7. Agent Instruction. Única fase que no escribe sin confirmación. Lee el `CLAUDE.md` global para no duplicar reglas. `AGENTS.md` y `CLAUDE.md` de la raíz quedan como copia de la misma fuente.

Bitácora: `.active-orchestrator-state.json`. El orquestador escribe versión, paso actual y quién ejecutó. Cada skill escribe solo su sección y puede leer las demás. Parar acá conserva el paso.

Protocolo al cierre de cada etapa: Continuar avanza; Ajustar rehace con el hallazgo; Parar acá guarda y se retoma. Un spec no revisado en Propose se arrastra a Apply.

SDD Orchestrator, en el día a día: TDD en cada Apply, delegación a subagentes, modelo según la tarea, y el mismo protocolo de inspección.

## Engram

Memoria persistente local. Se demuestra con lo que el proyecto guardó de verdad y con una consulta que recupere una sesión anterior. No se redacta un ejemplo de memoria.
