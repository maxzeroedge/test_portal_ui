<template>
    <v-container>
        <!-- <v-textarea
			:name="'input-' + Math.random()*1000"
			:label="label"
			:value="content"
			hint="Enter your text here"
            @input="textUpdated"
        ></v-textarea>-->
        <div class="editor">
            <editor-content class="editor__content" :editor="editor"/>
        </div>
    </v-container>
</template>

<script>
    import { Editor, EditorContent } from "tiptap";
    import {
        CodeBlockHighlight,
        HardBreak,
        Heading,
        Bold,
        Code,
        Italic
    } from "tiptap-extensions";
    import javascript from "highlight.js/lib/languages/javascript";
    import css from "highlight.js/lib/languages/css";
    
    export default {
        name: "TextAreaComponent",
        components: {
            EditorContent
        },
        data() {
            return {
                editor: new Editor({
                    extensions: [
                        new CodeBlockHighlight({
                            languages: {
                                javascript,
                                python,
                                java,
                                c,
                                cpp,
                                cs
                            }
                        })
                    ],
                    onUpdate(args){
                        this.callback(args.getHTML())
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
                type: String,
                default: ""
            }
        },
        methods: {
            textUpdated(val) {
                this.callback(val);
            }
        },
        beforeDestroy() {
            this.editor.destroy()
        }
    };
</script>

<style>
</style>
