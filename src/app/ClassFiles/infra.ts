export class Infra {

    constructor(
        public infraid: number = 0,
        public centid: string = "",
        public infra: string = "",

        public working: number = 0,

        public notworking: number = 0,

        public total: number = 0,

        public createon: Date = new Date(),
        public createby: string = "",

        public updateon: Date = new Date(),



        public updateby: string = "",


    ) { }
}
