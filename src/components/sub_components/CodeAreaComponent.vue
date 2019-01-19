<template>
	<v-container>
		<codemirror v-model="code" :options="cmOption"></codemirror>
	</v-container>
</template>

<script>

	export default {
		name: "CodeAreaComponent",
		components: {},
		data() {
			var vm = this;
			return {
				code: '',
				mode: 'text/javascript',
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
			this.editor.destroy();
		}
	};
</script>

<style>
</style>
