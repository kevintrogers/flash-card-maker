<template>
    <div class='luchador-create col-12 '>
        <form>
            <div class='form-group col-xs-10'>
                <label for='luchador-name'>Name of Fighter</label>
                <input type='text' class='form-control' id='luchador-name'>
            </div>
            <div class='row'>
                <div class='form-group col-xs-6 '>
                    <label for='luchador-height'>Height (In Inches)</label>
                    <input class='' type='number' value='68' min='40' max='120' class='form-control' id='luchador-height'>
                </div>
                
                <div class='form-group col-xs-6'>
                    <label for='luchador-weight'>Weight (In Pounds)</label>
                    <input type='number' value='200' min='75' max='999' class='form-control' id='luchador-weight'>
                </div>
            </div>
            <div class='row'>
                <div class='form-group col col-xs-6'>
                    <label for='luchador-mask-color'>Mask Color</label>
                    <select class="custom-select" id='luchador-mask-color' v-model='maskColor'>
                      <option selected>Choose Mask Color</option>
                      <option v-for='color in colors' >{{color}}</option>
                    </select>
                    <span>{{maskColor}}</span>
                </div>
                <div class='form-group col-xs-6'>
                    <label for='luchador-trim-color'>Trim Color</label>
                    <select class="custom-select" id='luchador-trim-color' v-model='trimColor'>
                      <option selected>Choose Trim Color</option>
                      <option v-for='color in colors'>{{color}}</option>
                  </select>
                  <span>{{trimColor}}</span>
                </div>
            </div> 
            <div class='row'>
            <div class='form-group col-xs-6'>
                <label for='luchador-eye-color'>Eye Color</label>
                <select class="custom-select" id='luchador-eye-color' v-model='eyeColor'>
                  <option selected>Choose Eye Color</option>
                  <option v-for='eye in eyes'>{{eye}}</option>
              </select>
              <span>{{eyeColor}}</span>
              </div>
                    <div class='form-group col-xs-6'>
                <label for='luchador-mask-style'>Mask Style</label> 
                <select class="custom-select" id='luchador-mask-style' v-model='maskStyle'>
                  <option selected>Choose Mask Style</option>
                  <option v-for='style in styles'>{{style}}</option>
              </select>
              <span>{{maskStyle}}</span>
              </div>
              </div>
             </form> 
            </div>
        
    </div>
</template>
<script>
export default {
    data() {
        
        return {
            maskColor: '',
            trimColor: '',
            eyeColor: '',
            maskStyle: '',
            colors: ['orange','yellow','red','green','purple','blue','black','white'],
            eyes: ['lightblue', 'lightgreen', 'blue', 'lightgrey', 'green', 'brown', 'black', 'red'],
            styles: ['Classic', 'Beast', 'Chupacabra', 'Pretty Boy', 'Royal', 'Razzle Dazzle', 'Fabulous', 'Demon']
        }
        
    }
}

    
</script>
