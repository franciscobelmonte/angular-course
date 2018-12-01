import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {
    private heroes: Heroe[] = [
        {
            name: 'Aquaman',
            // tslint:disable-next-line:max-line-length
            bio: 'Aquaman\'s most recognized power is the telepathic ability to communicate with marine life, which can summon at great distances.',
            img: 'assets/img/aquaman.png',
            firstAppearance: '1941-11-01',
            publisher: 'DC'
        },
        {
            name: 'Batman',
            // tslint:disable-next-line:max-line-length
            bio: 'The main features of Batman are summarized in "physical dexterity, deductive skills, and obsession. Most of the basic features of comics have varied by the different interpretations they have given to the character.',
            img: 'assets/img/batman.png',
            firstAppearance: '1939-05-01',
            publisher: 'DC'
        },
        {
            name: 'Daredevil',
            // tslint:disable-next-line:max-line-length
            bio: 'Having lost his sight, Daredevil\'s remaining four senses were increased by radiation to superhuman levels in the accident he had as a child.Despite his blindness, he can see through a sixth sense that serves as a radar similar to that of bats.',
            img: 'assets/img/daredevil.png',
            firstAppearance: '1964-01-01',
            publisher: 'Marvel'
        },
        {
            name: 'Hulk',
            // tslint:disable-next-line:max-line-length
            bio: 'His main power is his ability to increase his strength to virtually unlimited levels while increasing his fury. Depending on which Hulk personality is in charge at the time (the Hulk Banner is the weakest, but compensates with his intelligence).',
            img: 'assets/img/hulk.png',
            firstAppearance: '1962-05-01',
            publisher: 'Marvel'
        },
        {
            name: 'Linterna Verde',
            // tslint:disable-next-line:max-line-length
            bio: 'Possessor of the ring of power that possesses the capacity to create manifestations of solid light by means of the utilization of the thought. It is fed by the Green Flame (revised by later writers as a mystical power called Starheart), a magical flame contained within an orb (the orb was actually a green metal meteorite that fell to Earth, which was found by a lamp manufacturer called Chang).',
            img: 'assets/img/linterna-verde.png',
            firstAppearance: '1940-06-01',
            publisher: 'DC'
        },
        {
            name: 'Spider-Man',
            // tslint:disable-next-line:max-line-length
            bio: 'After being bitten by a radioactive spider, he obtained the following superhuman powers: great strength, agility, being able to climb walls. Spider-Man\'s strength allows it to lift 10 tons or more.Thanks to this great strength, Spider-Man can perform unbelievable jumps.An \'arachnid sense\', which allows him to know if a danger hangs over him, before it happens.Sometimes this can lead Spider - Man to the source of danger.',
            img: 'assets/img/spiderman.png',
            firstAppearance: '1962-08-01',
            publisher: 'Marvel'
        },
        {
            name: 'Wolverine',
            // tslint:disable-next-line:max-line-length
            bio: 'In the fictitious universe of Marvel, Wolverine possesses regenerative powers that can heal any wound, no matter how deadly, and that same power makes it immune to any disease on Earth and some extraterrestrials. It also possesses a superhuman force, which although it is not compared with that of other superheroes such as the Hulk, it surpasses that of any human.',
            img: 'assets/img/wolverine.png',
            firstAppearance: '1974-11-01',
            publisher: 'Marvel'
        }
    ];

    constructor () { }

    getHeroes(): Heroe[] {
        return this.heroes;
    }

    getHero(id: number): Heroe {
        return this.heroes[id];
    }

    searchHeroes (search: string): Heroe[] {
        const results: Heroe[] = [];
        search = search.toLowerCase();

        for (const heroe of this.heroes) {
            if (heroe.name.toLowerCase().includes(search)) {
                results.push(heroe);
            }
        }
        return results;
    }
}

export interface Heroe {
    name: string;
    bio: string;
    img: string;
    firstAppearance: string;
    publisher: string;
}
