<template>
    <div class='col-4 col-offset-8'>
        <div class='row'>
                <span class='placard' id='player-placard'>YOU</span>
            </div>
            <div class='row'>
                <div class='health-meter col-10 col-offset-1' id='player-health-meter'></div>
            </div>
            
        <div class='row'>
                <span class='placard' id='opponent-placard'>OPPONENT</span>
            </div>
            <div class='row'>
                <div class='health-meter col-10 col-offset-1' id='opponent-health-meter'></div>
        </div>
        
        <div class='row'>
            <span class='question-count'>Questions: {{questionCount}}</span>
        </div>
        
    </div>
    
</template>
<script>
export default {
    data() {
        return {
            
            questionCount: 0,
            
        };
    }
};
    
</script>
<style>
    
</style>