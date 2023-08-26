let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published:boolean = true;
let level:any;
//avoid using type any
level = 1;

level = 'a';

function render(document:any){
    console.log(document);
    
}