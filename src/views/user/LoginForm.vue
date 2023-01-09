<template>
    <from>
        <!-- username input -->
        <MDBInput
            type="username"
            label="Username"
            id="form1username"
            v-model="Username_form "
            wrapperClass="mb-4"
        />
        <!-- pwd input -->
        <MDBInput
            type="password"
            label="password"
            id="form1password"
            v-model="Password_form"
            wrapperClass="mb-4" 
        />
        <!-- submit button -->
        <MDBBtn color="primary">Login</MDBBtn>
    </from>
</template>
<script setup lang="ts">
  import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
  } from "mdb-vue-ui-kit";
  import { ref } from "vue";

  const Username_form = ref("");
  const Password_form = ref("");
</script>