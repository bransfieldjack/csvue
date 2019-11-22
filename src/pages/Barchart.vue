<template>
    <b-container class="bv-example-row">
        <br>
        <hr>
        <br>
        <b-row class="text-center">
            
            <b-col></b-col>
     
                <b-col cols="8">
                    <!-- <vue-plotly :data="data" :layout="layout" :options="options" ref="plotlyRef"/> -->
                
                <div>
                  <apexchart width="100%" :type="type" :options="options" :series="series"></apexchart>
                </div>

                <br>
                <hr>
                <br>

                <!-- Styled -->
                <b-form-file
                    v-model="file"
                    :state="Boolean(file)"
                    placeholder="Choose a file or drop it here..."
                    drop-placeholder="Drop file here..."
                    ></b-form-file>

                <div class="mt-3">Selected file: {{ file ? file.name : '' }} &nbsp; <b-button @click="parse()" variant="success">Parse</b-button>&nbsp;&nbsp;<b-button @click="line()" variant="outline-primary">Line</b-button>&nbsp;&nbsp;<b-button @click="bar()" variant="outline-primary">Bar</b-button>&nbsp;&nbsp;</div>
                
                
                <br>
                <br>
                <br>

                <hr>
                
                </b-col>
        
            <b-col></b-col>
        </b-row>
    </b-container>
</template>

<script>
import VuePlotly from '@statnett/vue-plotly'
import VuePapaParse from 'vue-papa-parse'

export default {
  components: {
    VuePlotly
  },
  data: function () {
    return {
        type: '',
        csv_data: null,
        file: null,
        // data: null,
        options: null,
        series: null,
    }
  },
  methods: {
      line: function(){
          this.type = 'line'
      },
      bar: function(){
          this.type = 'bar'
      },
      parse: function(){

          const that = this;    // In order to reference the variables above.
          this.csv_data = this.$papa.parse(this.file, {
                        header: true,
                        dynamicTyping: true,
                        complete: function(results) {

                            var i, j;
                            // var catList = that.options.categories
                            // var datList = that.options.data

                            var values = Object.values(results.data)
                            var moreValues = Object.values(values)
                            

                            for(i=0; i<values.length; i++){
                              that.options = {
                                  chart: {
                                    id: 'vuechart-example'
                                  },
                                  xaxis: {
                                    categories: Object.keys(values[i]),
                                  },  
                              },
                              that.series = [{
                                    name: 'series-1',
                                    data: Object.values(values[i]),
                                }]
                              
                            }
                            //that.data = results.data
                     
                        },
          })
          this.$refs.plotlyRef.$on('click', function(data){ 
              console.log(data)
          })
        
      },
  },
}
</script>

<style scoped>

</style>

