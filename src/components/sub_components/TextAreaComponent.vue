<template>
	<v-container>
		<!-- <v-textarea
			:name="'input-' + Math.random()*1000"
			:label="label"
			:value="content"
			hint="Enter your text here"
            @input="textUpdated"
		></v-textarea>-->
		<v-card class="editor">
			<editor-menu-bar/>
			<editor-content class="editor__content" :editor="editor"/>
		</v-card>
	</v-container>
</template>

<script>
	import {
		Editor,
        EditorContent,
        EditorMenuBar,
		EditorMenuBubble,
		EditorFloatingMenu
	} from "tiptap";
	import {
		CodeBlockHighlight,
		HardBreak,
		Heading,
		Bold,
		Code,
		Italic
	} from "tiptap-extensions";
	import javascript from "highlight.js/lib/languages/javascript";
	import python from "highlight.js/lib/languages/python";
	import java from "highlight.js/lib/languages/java";
	// import c from "highlight.js/lib/languages/c";
	// import cpp from "highlight.js/lib/languages/cpp";
	// import cs from "highlight.js/lib/languages/cs";
	import css from "highlight.js/lib/languages/css";

	export default {
		name: "TextAreaComponent",
		components: {
			Editor,
            EditorContent,
            EditorMenuBar,
			EditorMenuBubble,
			EditorFloatingMenu
		},
		data() {
			var vm = this;
			return {
				editor: new Editor({
                    content: '<br/><br/><br/><br/>',
					extensions: [
						new CodeBlockHighlight({
							languages: {
								javascript,
								python,
								java
								// c,
								// cpp,
								// cs
							}
						}),
						new HardBreak(),
						new Heading({ levels: [1, 2, 3] }),
						new Bold(),
						new Code(),
						new Italic()
					],
					onUpdate(args) {
						console.log(args.getHTML());
						vm.callback(args.getHTML());
					}
				})
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
