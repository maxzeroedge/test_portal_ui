<template>
    <v-container>
        <v-card flat>
            <v-layout v-for="pageData in pageJson" :key="Math.random()*1000 + pageData.type">
                <text-component v-if="pageData.type == 'TextComponent'" v-bind="pageData" />
                <code-component v-if="pageData.type == 'CodeComponent'" v-bind="pageData" />
                <text-area-component v-if="pageData.type == 'TextAreaComponent'" v-bind="pageData"/>
                <radio-component v-if="pageData.type == 'RadioComponent'" v-bind="pageData" />
                <dynamic-component v-if="pageData.type == 'DynamicComponent'" v-bind="pageData"/>
            </v-layout>
        </v-card>
    </v-container>
</template>

<script>
import TextComponent from "@/components/sub_components/TextComponent";
import CodeComponent from "@/components/sub_components/CodeComponent";
import TextAreaComponent from "@/components/sub_components/TextAreaComponent";
import RadioComponent from "@/components/sub_components/RadioComponent";
export default {
    name: 'DynamicComponent',
    components: {
        TextComponent,
        CodeComponent,
        TextAreaComponent,
        RadioComponent
    },
    props: {
        pageJson: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style>

</style>
