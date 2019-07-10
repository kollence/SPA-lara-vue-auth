<template>
    <div class="container">
        <div class="row justify-content-center">
        <div class="col-md-6 ml-3 h3 yellow">List</div>
        <div class="col-md-2 text-right mr-3">
            <!-- <button @click="addBTN">Add</button> -->
            <b-button pill @click="addBTN" variant="info">add new</b-button>
            
        </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card my-2 bg-opa" v-for="item in items" :key="item.id">
                    <div class="card-header"> 
                    <div class="row">
                        <div class="col-md-9 yellow">
                        {{item.title}}
                    </div>
                    <div class="col-md-3 text-right">
                        <!-- <button @click="editBTN(item)">edit</button> -->
                        <b-button pill size="sm" @click="editBTN(item)" variant="warning"><svg id="i-edit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
    <path d="M30 7 L25 2 5 22 3 29 10 27 Z M21 6 L26 11 Z M5 22 L10 27 Z" />
</svg></b-button>
                        <!-- <button @click="deleteBTN(item.id)">delete</button> -->
                        <b-button pill size="sm" @click="deleteBTN(item.id)" variant="danger"><svg id="i-trash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
    <path d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6" />
</svg></b-button>
                        
                    </div>
                    </div>
                    </div>

                    <div class="card-body yellow"
                     :style="{ backgroundImage: 'url(' + require('../../img/bg2.png') + ')', backgroundSize: 'cover' }">
                        {{item.body}}
                    </div>
                </div>
            </div>
        </div>
        <!-- Pagination buttons to navigate -->
        <div class="row justify-content-center">
            <div class="text-center">
                <div>
                <b-button-toolbar key-nav aria-label="Toolbar with button groups">
                    <b-button-group class="mx-1">
                    <b-button size="sm" >&laquo;</b-button>
                    <b-button size="sm" >&lsaquo;</b-button>
                    </b-button-group>
                    <b-button-group class="mx-1">
                    <b-button size="sm" >Edit</b-button>
                    <b-button size="sm" >Undo</b-button>
                    <b-button size="sm" >Redo</b-button>
                    </b-button-group>
                    <b-button-group class="mx-1">
                    <b-button size="sm" >&rsaquo;</b-button>
                    <b-button size="sm" >&raquo;</b-button>
                    </b-button-group>
                </b-button-toolbar>
                </div>
            </div>
        </div>
        <!-- MODAL for create, edit, delete -->
        <b-modal 
         centered
        :header-bg-variant="headerBgVariant"
        :header-text-variant="headerTextVariant"
        :body-bg-variant="bodyBgVariant"
        :body-text-variant="bodyTextVariant"
        :footer-bg-variant="footerBgVariant"
        :footer-text-variant="footerTextVariant"
        class="bg-opa"
        :title="action" 
        v-model="modalShow"
        @hidden="resetBTN"
        @ok="saveBTN"
        >
            <div class="delete" v-if="dltbtn">
              <div class="d-block text-center">
                <h3>Are you sure you want to delete!</h3>
              </div>
            </div>
            <b-form v-else>
                <b-form-group id="input-group-1" label="Title:" label-for="input-1">
                    <b-form-input
                    id="input-1"
                    v-model="form.title"
                    required
                    placeholder="Title"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Description:" label-for="input-2">
                    <b-form-input
                    id="input-2"
                    v-model="form.body"
                    required
                    placeholder="Description"
                    ></b-form-input>
                </b-form-group>
            </b-form>
            <template slot="modal-footer" slot-scope="{ ok, cancel }" class="bg-opa">
            <b-button size="sm" variant="success" @click="ok()">
                OK
            </b-button>
            <b-button size="sm" variant="danger" @click="cancel()">
                Cancel
            </b-button>
            </template>
        </b-modal>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [],
                dltbtn: false,
                modalShow: false,
                headerBgVariant: 'dark',
                headerTextVariant: 'light',
                bodyBgVariant: 'secondary',
                bodyTextVariant: 'light',
                footerBgVariant: 'dark',
                footerTextVariant: 'light',
                action: '',
                form: {
                    id: '',
                    title: '',
                    body: ''
                }
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        created() {
            this.getApi()
        },
        methods: {
            getApi () {
                axios.get('/api/articles')
                     .then(res => {
                         this.items = res.data.data
                     })
                     .catch(err => console.error(err))
            },
            resetBTN () {
                this.form.id = ''
                this.form.title = ''
                this.form.body = ''
                this.dltbtn = false
            },
            editBTN (item) {
                this.modalShow = true
                this.action = "Edit"
                this.form.id = item.id
                this.form.title = item.title
                this.form.body = item.body
            },
            addBTN () {
                this.modalShow = true
                this.action = "Add New"
                
            },
            deleteBTN (id) {
                this.dltbtn = true
                this.modalShow = true
                this.action = 'Delete'
                this.form.id = id

            },
            saveBTN (item) {
               this.modalShow = false 
               if (this.action == "Edit") {

                   console.log("EDITED:" + this.form.id, this.form.title, this.form.body )

               }else if (this.action == 'Add New') {

                   console.log("ADDED:" + this.form.id, this.form.title, this.form.body )

               }else if (this.action == 'Delete') {

                   console.log("DELETED:" + this.form.id )                   
               }
               this.resetBTN()
            }
        },
    }
</script>
<style scoped>
.bg-opa {
    background-color:rgba(0, 0, 255, 0.4);
}
</style>
