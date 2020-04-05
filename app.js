var vm1 = new Vue({
    el: '#app',
    data: {

        events: {
            eventDate: "August 14th - 16th",
            eventTitle: "Summer Festival!",
            eventTitle2: "test text",
            eventDescription: "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!"
        },
        newNameText: '',
        guestName: [],
        formSubmitClass: "",
        eventCapacity: 25,
        eventCapacityPercentage: 0

    },
    methods: {
        formSubmitted: function () {
            // console.log(this.newNameText)

            // methods re render the browser even if no data has changed.
            // This runs weather data has changed or not
            console.log('I am a method');
            if (this.newNameText.length > 0 && this.eventCapacityPercentage < 100) {
                this.guestName.push(this.newNameText)
                this.newNameText = ""
                this.eventCapacityPercentage = this.guestName.length / (this.eventCapacity / 100)
            }

        },
        keyPressed: function () {
            console.log('Key Pressed')
        },
    },
    computed: {
        sortNames: function () {
            // computed properties re render the browser and are performed after the methods
            // If no change is made, the computed property does not run.
            // computed does not perform async tasks
            console.log('I am a cumputed property')
            return this.guestName.sort()
        }
    },

    watch: {
        guestName: function (data) {
            console.log('guest name triggered')
        }
    },
    filters: {
        formatName: function (value) {
            // value's are passed from filter to filter in order
            // console.log(value)
            return value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase()
        }
    },
    beforeCreate: function () {
        console.log('beforeCreate')
    },
    created: function () {
        console.log('created')
    }, beforeMount: function () {
        console.log('beforeMount')
    }, mounted: function () {
        console.log('mounted')
    }, beforeUpdate: function () {
        console.log('beforeUpdate')
    }, updated: function () {
        console.log('updated')
    }, beforeDestroy: function () {
        console.log('beforeDestroy')
    }, destroyed: function () {
        console.log('destroyed')
    }

})

var vm2 = new Vue({
    el: "#navigation",
    data: {
        appName: "Guest List",
        navLinks: [
            { name: 'Home', id: 1, url: "https://www.google.com" },
            { name: 'Upcoming Events', id: 2, url: "https://www.amazon.com" },
            { name: 'Guest Benefits', id: 3, url: "https://www.ebay.com" },
            { name: 'Latest News', id: 4, url: "https://www.youtube.com" }



        ]
    },
    methods: {
        changeTitle: function () {
            this.$refs.name.hidden = true
            // console.log(this.$refs);
        }
    }

})

console.log(vm1)


