<template>
    <div>
        <h1 class="text-center yellow">Home</h1>
        <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card bg-opa">
                    <div class="card-header yellow">Home
                    </div>

                    <div class="card-body yellow"
                    :style="{ backgroundImage: 'url(' + require('../../img/bg2.png') + ')', backgroundSize: 'cover' }"
                    >
                        Control the header, footer, and body background and text variants by setting the header-bg-variant, header-text-variant, body-bg-variant, body-text-variant, footer-bg-variant, and footer-text-variant props. Use any of the standard Bootstrap variants such as danger, warning, info, success, dark, light, etc.
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        
    },
}
</script>

<style>
.bg-opa {
    background-color:rgba(0, 0, 255, 0.3);
}
/* .card-body {
    background-image: url('/../../img/bg2.png');
} */
</style>
