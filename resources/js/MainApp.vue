<template>
    <div style="height:100%;">
        <Nav></Nav>
        <Body></Body>
        <Foot></Foot>
    </div>
</template>

<script>
import Nav from './layouts/Nav'
import Body from './layouts/Body'
import Foot from './layouts/Footer'
export default {
    name: 'mainapp',
    components: {
        Nav,
        Body,
        Foot
    }
}
</script>

<style>

</style>
