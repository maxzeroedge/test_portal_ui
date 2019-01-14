<template>
	<v-container>
		<v-card>
            <v-radio-group v-model="radioGroup" @change="$emit('callback', radioGroup)">
				<v-radio v-for="item in contents" :key="Math.random()*1000 + item.id" :label="item.label" :value="item.value"></v-radio>
			</v-radio-group>
        </v-card>
	</v-container>
</template>

<script>
	export default {
        name: "RadioComponent",
        data(){
            return {
                'radioGroup': ''
            }
        },
        props: {
            items : {
                type: Array,
                default: () => []
            },
            callback: {
                type: Function,
                default: function(data){       
                    if(this.id){
                        this.$store.state.answers[this.id] = data;
                    }
                    console.log(data);
                }
            },
            id: {
                type: String,
                default: ''
            }
        }
	};
</script>

<style>
</style>
