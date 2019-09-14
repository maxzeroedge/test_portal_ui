<template>
    <v-toolbar>
        <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
        <v-toolbar-title>{{page_title}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn text>{{name}}</v-btn>
            <v-btn text>{{time}}</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
        name: 'Header',
        computed: {
            page_title(){
                return this.$store.state.page_title
            },
            name(){
                return this.$store.state.name;
            },
            time(){
                return this.$store.state.time;
            }
        }
    };
</script>

<style>
</style>
