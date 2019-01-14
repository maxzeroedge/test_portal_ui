<template>
    <v-container>
        <Header/>
        {{JSON.stringify(pageJson)}}
        <dynamic-component :pageJson="pageJson"/>
    </v-container>
</template>

<script>
    import Header from "@/components/Header";
    import DynamicComponent from "@/components/sub_components/DynamicComponent";

    export default {
        components: {
            Header,
            DynamicComponent
        },
        mounted(){
            if(this.$store.state.pageJson && !this.$store.state.pageJson.length){
                this.$store.dispatch('getPageJson');
            }
        },
        computed: {
            pageJson(){
                return this.$store.state.pageJson
            }
        }
    };
</script>
