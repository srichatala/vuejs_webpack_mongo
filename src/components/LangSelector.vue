<template>
    <div>
        <!-- <div class="ui fluid search selection dropdown" v-on:click="demo">
          <input type="hidden" v-model="country"  name="country">
          <i class="dropdown icon"></i>
          <div data-value="gb"><i class="gb flag"></i>ENGLISH</div>
          <div class="menu" id="lang">
            <div class="item"  v-on:click="switchI18n(en)" data-value="en"><i class="gb flag"></i>ENGLISH</div>
            <div class="item" v-on:click="switchI18(fr)" data-value="fr"><i class="fr flag"></i>FRENCH</div>
          </div>
        </div> -->
      <select v-model="selected" @change="switchI18n($event.target.value)">
        <option value="en">ENGLISH</option>
        <option value="fr">FRENCH</option>
      </select>
    </div>
</template>

<script>
export default {
    name: 'LangSelector',
     data () {
        var _locale = this.$i18n.locale
        return { selected: _locale}
    },
    methods: {
	  switchI18n(val) {
        // var lang = document.getElementById('lang')
        // lang.style.display = 'none'
        debugger
		this.$store.dispatch('switchI18n',val)
    },
    demo(event){
        var lang = document.getElementById('lang');
        lang.style.display = 'block';
        }
    }
}
</script>