<template>
    <div>
        <h1>Trivia Rumble</h1>
        <luchador-create></luchador-create>
        
        <welcome class='welcome'></welcome>
        <scoreboard class='scoreboard'></scoreboard>
        
        
        
    </div>
</template>
<script>
import LuchadorCreate from '../../client/ui/LuchadorCreate.vue';

export default {
    data() {
        return {
            
        };
    },
    components: {
        LuchadorCreate
    }
};



</script>
<style>
@import url('./scss/luchadorModel.scss');


</style>