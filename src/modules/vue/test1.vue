<template>
    <div>
        {{test()}}
        {{testArr()}}
        <div @click="clickHandler">click</div>     
    </div>
</template>    

<script lang="ts">
export default {
    data() {
        return {}
    },
    methods: {
        test() {
            let isDone: boolean = false;
            let num: number = 1;
            let name: string = "bob";
            let arr: Array<any> = [1, 1, 1];
            let list: any[] = [1, true, "free"];
            // 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
            let unusable: void = undefined;
            let someValue: any = "this is a string";
            return someValue
        },
        clickHandler():void{ // :void表示无任何返回
            alert('click')
        },
        testArr(){
            if(true) {
                var a = 1
            }
            return a
        }
    }
}
</script>
