<template>
    <v-container>
        <v-card flat>
            <v-card-title v-html="title" v-if="title"></v-card-title>
            <v-card-text v-html="content" v-if="content"></v-card-text>
            <v-list v-if="contents && contents.length > 0" >
                <v-card-text v-for="cnt in contents" :key="Math.random()*1000 + cnt" v-html="cnt" ></v-card-text>
                <v-divider/>
            </v-list>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'TextComponent',                                                                                                                  
    props: {
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        },
        contents: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style>

</style>
