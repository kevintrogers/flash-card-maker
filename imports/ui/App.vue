<template>
    <div>
        <luchador-create></luchador-create>
        <luchador-model></luchador-model>
        <h1>Trivia Rumble</h1>
        <welcome class='welcome'></welcome>
        <scoreboard class='scoreboard'></scoreboard>
        
        
        
    </div>
</template>
<script>
export default {
    data() {
        
        return {
            colors: ['orange','yellow','red','green','purple','blue','black','white'],
            eyes: ['lightblue', 'lightgreen', 'blue', 'lightgrey', 'green', 'brown', 'black', 'red'],
            styles: ['Classic', 'Beast', 'Chupacabra', 'Pretty Boy', 'Royal', 'Razzle Dazzle', 'Fabulous', 'Demon']
        }
        
    }
}

</script>
<style>


</style>