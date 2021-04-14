class marksmanAssasin {
    constructor(speed,ap,Qlvl,Wlvl,Elvl,Rlvl) {
        this.speed = speed,
        this.ap = ap,
        this.Qlvl = Qlvl,
        this.Wlvl = Wlvl,
        this.Elvl = Elvl,
        this.Rlvl = Rlvl
    }

    Q(Qlvl,ap){
        let blindDuration = [1.5,1.75,2,2.25,2.5];
        let baseDamage = [80,125,170,215,260];
        let totalDamage = baseDamage[Qlvl] + ap*0.80;
        console.log(`Con nivel de Q: ${Qlvl+1} y AP: ${ap} el dano es: ${totalDamage}, y la duracion del blind es: ${blindDuration[Qlvl]}`);
}
    W(Wlvl,speed){
        let moveSpeed = [0.10,0.14,0.18,0.22,0.26];
        let bonusSpeed = [0.20,0.28,0.36,0.44,0.52];
        let slowSpeed = speed*moveSpeed[Wlvl];
        let fastSpeed = speed*bonusSpeed[Wlvl];
        console.log(`Con nivel de W: ${Wlvl+1} y VM: ${speed} la VM es ${slowSpeed+speed} y la activa es ${fastSpeed+speed}`);
    }
    E(Elvl,ap){
        let onHit = [10,20,30,40,50];
        let onHitS = [6,12,18,24,30];
        let onHitT = onHit[Elvl] + ap*0.30;
        let onHitTS = onHitS[Elvl] + ap*0.10;
        console.log(`Con nivel de E: ${Elvl+1} y AP: ${ap} el dano es: ${onHitT} y por segundo es: ${onHitTS}`);
    }
    R(Rlvl,ap){
        let charges = [3,4,5];
        let bounce = [300,400,500];
        let slow = [0.30,0.40,0.50];
        let MagicDamage = [200,325,450];
        let TotalMagicDamage = MagicDamage[Rlvl]+ap*0.50
        console.log(`Con nivel de R: ${Rlvl+1} y AP: ${ap} el dano es: ${TotalMagicDamage} con ralentizacion, cargas y rango: ${slow[Rlvl]},${charges[Rlvl]},${bounce[Rlvl]}`)
    }
}

let Teemo = new marksmanAssasin(330,100,4,2,3,2);

//como empieza a contar de 0 el nivel 5 de habilidad Q es 4.

Teemo.Q(Teemo.Qlvl,Teemo.ap);
Teemo.W(Teemo.Wlvl,Teemo.speed);
Teemo.E(Teemo.Elvl,Teemo.ap);
Teemo.R(Teemo.Rlvl,Teemo.ap);