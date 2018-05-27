<template>
    <div>
        <label>{{$t('lang.components.labels[0].businessInfo')}}</label>
        <input v-model="user.businessName" v-bind:placeholder="$t('lang.components.input.placeholder[0].businessName')">
        <input v-model="user.businessPhoneNumber" v-bind:placeholder="$t('lang.components.input.placeholder[1].bphoneNumber')">
        <input v-model="user.businessAddress" v-bind:placeholder="$t('lang.components.input.placeholder[2].baddress')" ref="autocomplete" class="search-location" 
            onfocus="value = ''" type="text" />
        <label>{{$t('lang.components.labels[1].contactInfo')}}</label>
        <input v-model="user.email" v-bind:placeholder="$t('lang.components.input.placeholder[3].email')">
        <input v-model="user.firstName" v-bind:placeholder="$t('lang.components.input.placeholder[4].fName')">
        <input v-model="user.lastName" v-bind:placeholder="$t('lang.components.input.placeholder[5].lName')">
        <input v-model="user.companyName" v-bind:placeholder="$t('lang.components.input.placeholder[6].cName')">
        <input v-model="user.phoneNumber" v-bind:placeholder="$t('lang.components.input.placeholder[7].pNumber')">
        <router-link :to="{name: 'FormResults',data: user}">
            <button id="myButton" class="foo bar">Scan Now</button>
        </router-link>
    </div>
</template>
<script>

export default {
    name : 'FormSubmit',
    data () {
        return {
            user:{
                businessName: '',
                businessPhoneNumber : '',
                businessAddress : '',
                email :'',
                firstName: '',
                lastName : '',
                companyName : '',
                phoneNumber : ''
            }          
        }
    },
    mounted() {
    this.autocomplete = new google.maps.places.Autocomplete(
      (this.$refs.autocomplete),
      {types: ['geocode']}
    );
  }
} 
</script>

<style>

</style>
