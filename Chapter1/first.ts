// 타입은 소문자로 지정하며 변수 바로 뒤에 작성
const a: number = 5;
const b: string = '5';
const c: boolean = true;
const tr: true = true; // 이처럼 고정된 원시값을 넣을 수도 있음
const d: undefined = undefined;
const e: null = null;
const f: symbol = Symbol.for('abc');
const g: any = '123'; // any 는 어떤 타입이든 다 해당됨 / 따라서 쓰지 않는게 좋음
let aa = 123;
aa = 'hello' as unknown as number;

const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };
const arr: string[] = ['123', '456']; // 갯수 상관없음
const arr2: number[] = [123, 456]; // 갯수 상관없음
const arr3: [number, number, string] = [123, 456, '안녕']; // 타입과 갯수를 맞춰야 함 (튜플)
const arr4: Array<number> = [123, 456]; // <>를 제네릭이라고 칭함
//함수 선언문
function add(x: number, y: number): number {
    return x + y;
}
//화살표 함수
const add2: (x: number, y: number) => number = (x, y) => x + y;

//화살표 함수 (생략버전)
type Add = (x: number, y: number) => number;
const add3: Add = (x, y) => x + y;

// interface Add{
//   (x:number,y:number):number
// }

try {
    const array: string[] = []; // 빈 배열 선언할 때 타입을 지정하지 않으면 never[] 라는 타입으로 추론되기에 타입 지정해줘야함
    array[0];
} catch (error) {
    error;
}

const head = document.querySelector('#head'); // !는 지양하는게 좋음 대신 if 사용 ( ! 는 강제적으로 타입 지정하는 것 )
if (head) {
    head.innerHTML = 'hello world';
    console.log(head);
}

const Odirection = {
    Up: 3,
    Down: 4,
    Left: 5,
    Right: 6,
} as const; // as const 는 키에 할당된 값을 그대로 상수로 쓰고싶을 때 사용

type A = { a: string };
const ad: A = { a: 'hello' };

interface B {
    a: string;
}
const cd: B = { a: 'hello' };

// interface는 extends(상속/확장) 활용 가능 ( class 처럼 )
// 또한 중복해서 선언할 수 있음 / 선언할 때 마다 나중에 작성된 인터페이스로 덮어지는 게 아니라 합쳐짐
interface One {
    breath: true;
}
interface Two extends One {
    breed: true;
}
const bc: Two = { breed: true, breath: true };

interface fun {
    talk: () => void;
    eat: () => void;
}
