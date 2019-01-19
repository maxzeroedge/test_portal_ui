<template>
	<v-container>
		<v-textarea
			:name="'input-' + Math.random()*1000"
			:label="label"
			:value="content"
			hint="Enter your text here"
            @input="textUpdated"
		></v-textarea>
	</v-container>
</template>

<script>

	export default {
		name: "TextAreaComponent",
		components: {},
		data() {
			var vm = this;
			return {};
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
