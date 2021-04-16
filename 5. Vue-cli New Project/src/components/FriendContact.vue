<template>
    <li>
        <h2>{{ name }} {{  isFavorite ? '(Favorite)' : '' }} </h2>
        <button @click="toggleDetails">{{ detailsAreVisible? 'Hide': 'Show' }} Details</button>
        <button @click="toggleFavorite">Toggle Favorite</button>
        
        <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong>{{ phoneNumber }}</li>
        <li><strong>Email:</strong> {{ emailAddress }}</li>
        <button @click="$emit('delete-friend',id)">Delete Friend</button>
        </ul>
    </li>
</template>
<script>
export default {
    // props: ["name","phoneNumber","emailAddress","isFavorite"],
    props: {
        id:{
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAddress:{
            type: String,
            required: true
        },
        isFavorite:{
            type: Boolean,
            required: false,
            default: false,
            validator: (value) => {
                return value === true || value === false;
            }
        }
    },
    data() {
        return {
            detailsAreVisible: false,
            favoriteIsSelected : this.isFavorite,
            friend: {
                id: 'manuel',
                name: "Manuel Lorenz",
                email: "manuel@localhost",
                phone: "012 3456 789"
            }
        }
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible= !this.detailsAreVisible;
        },
        toggleFavorite(){
           this.$emit('toggle-favorite',this.id)
        }
    },
}
</script>