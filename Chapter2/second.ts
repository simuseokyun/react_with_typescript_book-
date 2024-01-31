interface A {
    a: string;
}
const obj = { a: 'hello', b: 'world' };
const obj1: A = obj; // 잉여 속성 검사( 오브젝트를 변수 선언하고 대입하면 검사 x)

// void 타입의 세 가지 종류
function a(): void {
    return; // 리턴값이 undefined 가 아닐 경우 에러남
}
interface Human {
    talk: () => void;
}

function numOrNumArray(a: number | number[]) {
    // 타입스크립트에서 유니언 타입이 자주 사용됨 ( | )
    if (Array.isArray(a)) {
        // number[]
        a.concat(4);
    } else {
        //number
        a.toFixed(3);
    }
}

//             public       protected      private
// 클래스내부       o               o             o
// 인스턴스         o               x            x
// 상속클래스        o              x             x
