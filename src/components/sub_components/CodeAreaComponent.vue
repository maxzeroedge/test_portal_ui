<template>
	<v-container>
		<!-- <codemirror v-model="code" :options="cmOption"></codemirror> -->
		<textarea
			:ref="name"
			:id="name"
			:name="name"
			:label="label"
			hint="Enter your text here"
            v-model="content"
		></textarea>
	</v-container>
</template>

<script>
	import CodeMirror from 'codemirror/src/codemirror';
	import javascript from 'codemirror/mode/javascript/javascript';
	export default {
		name: "CodeAreaComponent",
		components: {},
		data(vm) {
			return {
				name: ('input-' + Math.random()*1000).replace('.', '_'),
				code: vm.content,
				mode: 'javascript',
				cmOption: {
					"tabSize": 4,
					"styleActiveLine": true,
					"lineNumbers": true,
					"line": true,
					"foldGutter": true,
					"styleSelectedText": true,
					"mode": vm.mode,
					"keyMap": "sublime",
					"matchBrackets": true,
					"showCursorWhenSelecting": true,
					"theme": "monokai",
					"extraKeys": { "Ctrl": "autocomplete" },
					"hintOptions":{
						"completeSingle": false
					}
				}
			};
		},
		watch: {
			code(data){
				//console.log(data);
			}
		},
		mounted(){
			let vm = this;
			CodeMirror.fromTextArea(vm.$refs[vm.name], {
				value: vm.content,
				lineNumbers: true
			});
		},
		props: {
			label: {
				type: String,
				default: ""
			},
			content: {
				type: String,
				default: ""
			},
			callback: {
				type: Function,
				default: function(data) {
					if (this.id) {
						this.$store.state.answers[this.id] = data;
					}
					console.log(data);
				}
			},
			id: {
				type: [String, Number],
				default: ""
			}
		},
		methods: {
			textUpdated(val) {
				this.callback(val);
			}
		},
		beforeDestroy() {
			// this.editor.destroy();
		}
	};
</script>

<style>
</style>
