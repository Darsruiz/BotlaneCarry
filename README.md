# BotlaneCarry
Proyecto de ADC en ANGULAR hola buenas tardes
# TO DO: 

Imagenes skins campeones: La idea es que las casillas se anumeren y como tendremos 2 arrays, uno para skins y otro para campeones podriamos modificarlo mucho mas facil al final. LISTO
Array con TODOS los nombres de los campeones que pondremos
Array con TODAS los numeros de skins: ex: swain 5 skins main.component.ts (ni idea como implementar eso todavia)
Igualmente con los nombres, no escribiriamos 'tristana' en el main.html sino nombres[1] LISTO

Habilidades, Ratios, Dano, Enfriamiento, todo en variables y constantes, ex teemo: console.log(`Con nivel de Q: ${Qlvl+1} y AP: ${ap} el dano es: ${totalDamage}, y la duracion del blind es: ${blindDuration[Qlvl]}`);

seria asi: Con nivel de Q: 3 y AP: 100 el dano es: 150, y la duracion del blind es: 1,5 segundos, ejemplo en /classTemplate

estructura pagina web campeones: Mi plan es hacer una sola estructura y que los valores e imagenes se llenen a partir del array nombre que tenemos, es decir: si presiono a swain o a ezreal, en vez de hacer una pagina para cada uno (paginaweb/ezreal , paginaweb/swain) lo que haria seria: paginaweb/campeon y los datos se le pasarian a traves de un ?child? 

desglosar y ocultar secciones: Habilidades Historia Skins
