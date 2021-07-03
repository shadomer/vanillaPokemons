class Pokemon {
    private attacks: string[] = [];

    constructor(
        protected readonly name:string,
        protected friendlyName:string,
        protected readonly number:number,
        protected readonly imageUrl:string){

    };

    attack(this: Pokemon){
        console.log(`The pokemon ${this.number} ${this.name} ${this.friendlyName} attacks`)
    }

    addAttack(attack:string){
        this.attacks.push(attack);
    }

    displayAttacks(){
        console.log(`${this.attacks.length} attacks`);
        console.log(this.attacks);
    }
    
}


class PokemonEau extends Pokemon {
    private waterAttacks:string[] = [];

    get getWaterAttacks(){
        return this.waterAttacks;
    }

    constructor(
        name:string,
        friendlyName:string,
        number:number,
        imageUrl:string){
            super(name,friendlyName,number,imageUrl);
    };

    attack(this: PokemonEau){
        console.log(`The pokemon ${this.number} ${this.name} ${this.friendlyName} attacks water`)
    }

}

const pikachu = new PokemonEau("Pikachu","Pika pika",25,"");

pikachu.addAttack("Attaque éclair");
pikachu.addAttack("Attaque tonnerre");


document.querySelector("#btnAttack")?.addEventListener("click",()=>{
    pikachu.attack();
});

document.querySelector("#btnWaterAttack")?.addEventListener("click",()=>{
    pikachu.attack();
});

document.querySelector("#btnDisplayAttacks")?.addEventListener("click",()=>{
    pikachu.displayAttacks();
})



