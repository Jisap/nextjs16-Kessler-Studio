# Cómo funciona el efecto de letras "fancy"

El efecto funciona en dos fases: primero JavaScript prepara las letras al cargar la página y después el CSS las anima cuando el ratón pasa por encima del enlace.

## Fase 1: carga de la página (JavaScript)

Al montarse el componente, `useEffect` llama a `enhance()` para cada enlace. Esta función convierte el texto en una estructura de `span` anidados, una por letra.

<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 680 392" role="img">
<title>Fase de carga: cómo enhance() prepara las letras</title>
<desc>Flujo de cuatro pasos: useEffect llama a enhance, se divide el texto en letras, se crean tres span por letra y cada inner recibe un desfase aleatorio.</desc>
<style>
text{font-family:sans-serif}
.th{font-size:14px;font-weight:500;fill:#444441}
.ts{font-size:12px;font-weight:400;fill:#5F5E5A}
.arr{stroke:#888780;stroke-width:1.5;fill:none}
.c-gray rect{fill:#F1EFE8;stroke:#5F5E5A}
.c-purple rect{fill:#EEEDFE;stroke:#534AB7}
.c-purple .th{fill:#3C3489}
.c-purple .ts{fill:#534AB7}
.c-teal rect{fill:#E1F5EE;stroke:#0F6E56}
.c-teal .th{fill:#085041}
.c-teal .ts{fill:#0F6E56}
</style>
<defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#888780" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>
<g class="c-gray"><rect x="190" y="20" width="300" height="56" rx="8" stroke-width="0.5"/><text class="th" x="340" y="38" text-anchor="middle" dominant-baseline="central">useEffect al montar</text><text class="ts" x="340" y="56" text-anchor="middle" dominant-baseline="central">Llama a enhance() dos veces</text></g>
<line x1="340" y1="76" x2="340" y2="110" class="arr" marker-end="url(#arrow)"/>
<g class="c-purple"><rect x="190" y="112" width="300" height="56" rx="8" stroke-width="0.5"/><text class="th" x="340" y="130" text-anchor="middle" dominant-baseline="central">Divide el texto</text><text class="ts" x="340" y="148" text-anchor="middle" dominant-baseline="central">Una letra por elemento</text></g>
<line x1="340" y1="168" x2="340" y2="202" class="arr" marker-end="url(#arrow)"/>
<g class="c-purple"><rect x="190" y="204" width="300" height="56" rx="8" stroke-width="0.5"/><text class="th" x="340" y="222" text-anchor="middle" dominant-baseline="central">Crea 3 span por letra</text><text class="ts" x="340" y="240" text-anchor="middle" dominant-baseline="central">outer, inner y letter</text></g>
<line x1="340" y1="260" x2="340" y2="294" class="arr" marker-end="url(#arrow)"/>
<g class="c-purple"><rect x="190" y="296" width="300" height="56" rx="8" stroke-width="0.5"/><text class="th" x="340" y="314" text-anchor="middle" dominant-baseline="central">Desfase aleatorio en inner</text><text class="ts" x="340" y="332" text-anchor="middle" dominant-baseline="central">Entre -5 s y 0 s</text></g>
</svg>

Tras esta fase el texto se ve igual que antes, pero cada letra ya está envuelta en sus tres capas:

```html
<span class="outer">
  <span class="inner">
    <span class="letter">A</span>
  </span>
</span>
```

El desfase aleatorio de `inner` es negativo a propósito: la animación arranca "a mitad de camino" y ninguna letra se mueve a la vez que otra.

## Fase 2: hover (CSS)

Cuando el navegador detecta `:hover` sobre un elemento con la clase `fancy`, se activan tres efectos en paralelo.

<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 680 346" role="img">
<title>Fase de hover: qué ocurre al pasar el ratón</title>
<desc>El hover sobre un enlace fancy activa tres efectos en paralelo: dispersión de las letras, flotación y atenuación del resto de palabras. Al salir el ratón todo vuelve a su sitio.</desc>
<style>
text{font-family:sans-serif}
.th{font-size:14px;font-weight:500;fill:#444441}
.ts{font-size:12px;font-weight:400;fill:#5F5E5A}
.arr{stroke:#888780;stroke-width:1.5;fill:none}
.c-gray rect{fill:#F1EFE8;stroke:#5F5E5A}
.c-purple rect{fill:#EEEDFE;stroke:#534AB7}
.c-purple .th{fill:#3C3489}
.c-purple .ts{fill:#534AB7}
.c-teal rect{fill:#E1F5EE;stroke:#0F6E56}
.c-teal .th{fill:#085041}
.c-teal .ts{fill:#0F6E56}
</style>
<defs><marker id="arrow2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#888780" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>
<g class="c-gray"><rect x="220" y="20" width="240" height="56" rx="8" stroke-width="0.5"/><text class="th" x="340" y="38" text-anchor="middle" dominant-baseline="central">Ratón sobre .fancy</text><text class="ts" x="340" y="56" text-anchor="middle" dominant-baseline="central">Se activa :hover</text></g>
<line x1="340" y1="76" x2="136" y2="128" class="arr" marker-end="url(#arrow2)"/>
<line x1="340" y1="76" x2="340" y2="128" class="arr" marker-end="url(#arrow2)"/>
<line x1="340" y1="76" x2="544" y2="128" class="arr" marker-end="url(#arrow2)"/>
<g class="c-teal"><rect x="40" y="130" width="180" height="56" rx="8" stroke-width="0.5"/><text class="th" x="130" y="148" text-anchor="middle" dominant-baseline="central">Dispersión</text><text class="ts" x="130" y="166" text-anchor="middle" dominant-baseline="central">outer: mueve y rota</text></g>
<g class="c-teal"><rect x="250" y="130" width="180" height="56" rx="8" stroke-width="0.5"/><text class="th" x="340" y="148" text-anchor="middle" dominant-baseline="central">Flotación</text><text class="ts" x="340" y="166" text-anchor="middle" dominant-baseline="central">inner: sube y baja</text></g>
<g class="c-teal"><rect x="460" y="130" width="180" height="56" rx="8" stroke-width="0.5"/><text class="th" x="550" y="148" text-anchor="middle" dominant-baseline="central">Atenuación</text><text class="ts" x="550" y="166" text-anchor="middle" dominant-baseline="central">resto: opacidad 20%</text></g>
<line x1="130" y1="186" x2="290" y2="248" class="arr" marker-end="url(#arrow2)"/>
<line x1="340" y1="186" x2="340" y2="248" class="arr" marker-end="url(#arrow2)"/>
<line x1="550" y1="186" x2="390" y2="248" class="arr" marker-end="url(#arrow2)"/>
<g class="c-gray"><rect x="220" y="250" width="240" height="56" rx="8" stroke-width="0.5"/><text class="th" x="340" y="268" text-anchor="middle" dominant-baseline="central">Ratón fuera</text><text class="ts" x="340" y="286" text-anchor="middle" dominant-baseline="central">Todo vuelve a su sitio</text></g>
</svg>

### Qué controla cada capa

| Capa            | Qué hace                  | Cómo                                                                                                               |
| --------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `outer`         | Dispersa y rota la letra  | `transform: translate() rotate()` distinto por `nth-child`, con `transition` de 800 ms al entrar y 350 ms al salir |
| `inner`         | Hace flotar la letra      | Animación `float` en bucle (sube y baja un 3% cada 5 s) con el desfase aleatorio de la fase 1                      |
| `.word` (resto) | Atenúa las demás palabras | `#text:has(.fancy:hover) .word:not(.fancy:hover)` baja la opacidad a 0.2                                           |
| `letter`        | Contiene el carácter      | Sin animación en el CSS actual                                                                                     |

La separación en capas existe porque `outer` e `inner` animan la propiedad `transform` a la vez. Si ambos efectos estuvieran en el mismo elemento, se pisarían. Con un `span` para cada uno se suman sin conflicto.

Además, `.fancy span { display: inline-block }` es imprescindible, porque los `transform` no se aplican a elementos `inline`.

## Notas

- Los enlaces deben llevar `className="word fancy"`. Con `word-fancy` (con guion) no se aplica ninguna regla del efecto.
- La línea `letter.style.animationDelay = ...` en `enhance()` no tiene efecto con el CSS actual, porque no hay ninguna animación sobre `.letter`. Se puede eliminar.
- El CSS solo define posiciones de dispersión para 12 letras (`nth-child(1)` a `nth-child(12)`). Un texto más largo dejaría letras sin dispersar.
- Para mejorar la accesibilidad, conviene añadir `aria-label` con el texto original al enlace y `aria-hidden="true"` a los `span` de las letras.