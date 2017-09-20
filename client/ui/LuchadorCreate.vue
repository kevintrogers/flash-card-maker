<template>
    <div class='col-10 col-offset-1'>
        <form>
            <div class='form-group'>
                <label for='luchador-name'>Name of Fighter</label>
                <input type='text' class='form-control' id='luchador-name'>
            </div>
            <div class='form-group'>
                <label for='luchador-height'>Height (In Inches)</label>
                <input type='number' value='68' min='40' max='120' class='form-control' id='luchador-height'>
            </div>
            <div class='form-group'>
                <label for='luchador-weight'>Weight (In Pounds)</label>
                <input type='number' value='200' min='75' max='999' class='form-control' id='luchador-weight'>
            </div>
            <div class='form-group'>
                <label for='luchador-mask-color'>Mask Color</label>
                <select class="custom-select" id='luchador-mask-color'>
                  <option selected>Choose Trim Color</option>
                  <option v-for='color in colors' value={{index}}>{{color}}</option>
                  
                </select></div>
            <div class='form-group'>
                <label for='luchador-trim-color'>Trim Color</label>
                <select class="custom-select" id='luchador-trim-color'>
                  <option selected>Choose Trim Color</option>
                  <option v-for='color in colors' value={{index}}>{{color}}</option>
                  
                </select>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            colors: ['orange','yellow','red','green','purple','blue','black','white']
        }
        
    }
}
    
</script>
