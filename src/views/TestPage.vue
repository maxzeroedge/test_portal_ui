<template>
    <div>
        <Header/>
        <dynamic-component :pageJson="pageJson"/>
    </div>
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
                console.log(this.$store.state.pageJson)
                return this.$store.state.pageJson
            }
        }
    };
</script>
