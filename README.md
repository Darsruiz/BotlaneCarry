# BotlaneCarry
Proyecto de ADC en ANGULAR hola buenas tardes, soy pedrín, k tal? bien y vosotros¿? bien y vosotros? yohohoho!

# TO DO: 

1. Arrays con TODOS los nombres de los campeones que pondremos

2. desglosar y ocultar secciones: Habilidades Historia Skins

3. hacer que la seccion skins oculte las skins que el link falla

4. hacer que click en top mid jg cambie a el ARRAY respectivo

5. Array con TODAS los numeros de skins: ex: swain 5 skins main.component.ts (ni idea como implementar eso todavia)

6. estructura pagina web campeones: Mi plan es hacer una sola estructura y que los valores e imagenes se llenen a partir del array nombre que tenemos, es decir: si presiono a swain o a ezreal, en vez de hacer una pagina para cada uno (paginaweb/ezreal , paginaweb/swain) lo que haria seria: paginaweb/campeon y los datos se le pasarian a traves de un ?child? 

# DESPUES:

Habilidades, Ratios, Dano, Enfriamiento, todo en variables y constantes, ex teemo: console.log(`Con nivel de Q: ${Qlvl+1} y AP: ${ap} el dano es: ${totalDamage}, y la duracion del blind es: ${blindDuration[Qlvl]}`);

seria asi: Con nivel de Q: 3 y AP: 100 el dano es: 150, y la duracion del blind es: 1,5 segundos, ejemplo en /classTemplate

# LISTO:

Imagenes skins campeones: La idea es que las casillas se anumeren y como tendremos 2 arrays, uno para skins y otro para campeones podriamos modificarlo mucho mas facil al final. LISTO

Igualmente con los nombres, no escribiriamos 'tristana' en el main.html sino nombres[1] LISTO