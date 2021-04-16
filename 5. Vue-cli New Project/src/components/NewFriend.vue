<template>
    <form @submit.prevent="addFriend">
        <div>
            <label>Name</label>
            <input type="text" v-model="friend.name" />
        </div>
        <div>
            <label>Phone</label>
            <input type="tel" v-model="friend.phone" />
        </div>
        <div>
            <label>Email</label>
            <input type="email" v-model="friend.email" />
        </div>
        <button>Add Contact</button>
    </form>
</template>
<script>
export default {
    data() {
        return {
            friend: {}
        }
    },
    methods: {
        addFriend(){
            this.$emit('add-friend',this.friend)
        }
    },
}
</script>