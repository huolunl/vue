<template>
    <div>
        <p>你好{{pname}}</p>
        <slot name="huolun"></slot>
    </div>

</template>

<script>
export default {
    props:["pname"]

}
</script>