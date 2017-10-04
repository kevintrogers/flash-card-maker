<template>
    <div class='welcome'>
        <p>Welcome to Trivia Rumble, the finest Trivia app on the planet Earth!</p>
        <div class='row btn-row'>
            <button class='btn' @click='showRules = !showRules'>Learn How To Play</button>
            <button class='btn' @click=''>Challenge an Opponent</button>
        </div>
        <div class='rules-card' v-if='showRules' @click='showRules = !showRules'>
            <span class='close-card'>X</span>
            <p>Create your fighter. Tell us his attributes. Give your fighter a name,
            and list the fighter's attributes.</p>
            <p>Challenge an Opponent of your desired skill level. The higher the skill level of 
            your opponents, the quicker you will be able to climb the rankings.</p>
        </div>
    </div>
    
    
</template>
<script>
export default {
    data() {
        return {
            showRules: false,
            
        };
    }
};
    
</script>
<style>

    
</style>