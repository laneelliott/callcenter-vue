<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <form>
                    <div class="form-group">
                        <label for="inputTitle" class="float-left">Title</label>
                        <input type="text" class="form-control" id="inputTitle" placeholder="Fall Share Call Center Form">
                    </div>
                    <div class="form-group">
                        <label for="inputAlias" class="float-left text-left">Alias:<br>moodyglobal.org/gapp/</label>
                        <input type="text" class="form-control" id="inputAlias" placeholder="fsh-callcenter">
                    </div>
                    <div class="form-group">
                        <label for="selectType" class="float-left">Title</label>
                        <select class="form-control" id="selectType">
                            <option>Inbound Call Center</option>
                            <option>Outbound Call Center</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="selectOperator" class="float-left">Title</label>
                        <select class="form-control" id="selectOperator">
                            <option>Volunteer</option>
                            <option>Student</option>
                            <option>Staff</option>
                            <option>External Call Center</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
        <hr>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h3 class="float-left">Codes</h3>
            </div>
        </div>
        <div class="row form-group justify-content-center">
            <div class="col-md-2 text-left">
                <h5>Campaign:</h5>
            </div>
            <div class="col-md-4 text-left">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="campaignCode" id="campaignCodeSingleValRadio" value="single" v-model="campaignSource">
                    <label class="form-check-label" for="campaignCodeSingleValRadio">Single Value</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="campaignCode" id="campaignCodeSelectorRadio" value="select" v-model="campaignSource">
                    <label class="form-check-label" for="campaignCodeSelectorRadio">Selector</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="campaignCode" id="campaignCodeUrlRadio" value="url" v-model="campaignSource">
                    <label class="form-check-label" for="campaignCodeUrlRadio">URL Value</label>
                </div>
                <input type="text" class="form-control" id="campaignCodeSingleVal" placeholder="Type Value" v-if="campaignSource === 'single'">
                <select class="form-control" id="campaignCodeSelector" v-else-if="campaignSource === 'select'">
                    <option>FSH</option>
                    <option>SHR</option>
                    <option>LAL</option>
                </select>
                <input type="text" class="form-control" id="campaignCodeUrl" placeholder="Value Informed from URL" v-else-if="campaignSource === 'url'" disabled>
            </div>
        </div>
        <div class="row form-group justify-content-center">
            <div class="col-md-2 text-left">
                <h5>Appeal:</h5>
            </div>
            <div class="col-md-4 text-left">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="appealCode" id="appealCodeSingleValRadio" value="single" v-model="appealSource">
                    <label class="form-check-label" for="campainCodeSingleValRadio">Single Value</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="appealCode" id="appealCodeSelectorRadio" value="select" v-model="appealSource">
                    <label class="form-check-label" for="appealCodeSelectorRadio">Selector</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="appealCode" id="appealCodeUrlRadio" value="url" v-model="appealSource">
                    <label class="form-check-label" for="appealCodeUrlRadio">URL Value</label>
                </div>
                <input type="text" class="form-control" id="appealCodeSingleVal" placeholder="Type Value" v-if="appealSource === 'single'">
                <select class="form-control" id="appealCodeSelector" v-else-if="appealSource === 'select'">
                    <option>FSH</option>
                    <option>SHR</option>
                    <option>LAL</option>
                </select>
                <input type="text" class="form-control" id="appealCodeUrl" placeholder="Value Informed from URL" v-else-if="appealSource === 'url'" disabled>
            </div>
        </div>
        <div class="row form-group justify-content-center">
            <div class="col-md-2 text-left">
                <h5>Designation:</h5>
            </div>
            <div class="col-md-4 text-left">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="designationCode" id="designationCodeSingleValRadio" value="single" v-model="designationSource">
                    <label class="form-check-label" for="campainCodeSingleValRadio">Single Value</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="designationCode" id="designationCodeSelectorRadio" value="select" v-model="designationSource">
                    <label class="form-check-label" for="designationCodeSelectorRadio">Selector</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="designationCode" id="designationCodeUrlRadio" value="url" v-model="designationSource">
                    <label class="form-check-label" for="designationCodeUrlRadio">URL Value</label>
                </div>
                <input type="text" class="form-control" id="designationCodeSingleVal" placeholder="Type Value" v-if="designationSource === 'single'">
                <select class="form-control" id="designationCodeSelector" v-else-if="designationSource === 'select'">
                    <option>FSH</option>
                    <option>SHR</option>
                    <option>LAL</option>
                </select>
                <input type="text" class="form-control" id="designationCodeUrlRadio" placeholder="Value Informed from URL" v-else-if="designationSource === 'url'" disabled>
            </div>
        </div>
        <div class="row form-group justify-content-center">
            <div class="col-md-2 text-left">
                <h5>Gift Source:</h5>
            </div>
            <div class="col-md-4 text-left">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="giftSourceCode" id="giftSourceCodeSingleValRadio" value="single" v-model="giftSource">
                    <label class="form-check-label" for="campainCodeSingleValRadio">Single Value</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="giftSourceCode" id="giftSourceCodeSelectorRadio" value="select" v-model="giftSource">
                    <label class="form-check-label" for="giftSourceCodeSelectorRadio">Selector</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="giftSourceCode" id="giftSourceCodeUrlRadio" value="url" v-model="giftSource">
                    <label class="form-check-label" for="giftSourceCodeUrlRadio">URL Value</label>
                </div>
                <input type="text" class="form-control" id="giftSourceCodeSingleVal" placeholder="Type Value" v-if="giftSource === 'single'">
                <select class="form-control" id="giftSourceCodeSelector" v-else-if="giftSource === 'select'">
                    <option>FSH</option>
                    <option>SHR</option>
                    <option>LAL</option>
                </select>
                <input type="text" class="form-control" id="giftSourceCodeUrl" placeholder="Value Informed from URL" v-if="giftSource === 'url'" disabled>
            </div>
        </div>
        <div class="row form-group justify-content-center">
            <div class="col-md-2 text-left">
                <h5>Corp Gift:</h5>
            </div>
            <div class="col-md-4 text-left">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="corpgiftCode" id="corpgiftCodeSingleValRadio" value="single" v-model="corpgiftSource">
                    <label class="form-check-label" for="campainCodeSingleValRadio">Single Value</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="corpgiftCode" id="corpgiftCodeSelectorRadio" value="select" v-model="corpgiftSource">
                    <label class="form-check-label" for="corpgiftCodeSelectorRadio">Selector</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="corpgiftCode" id="corpgiftCodeUrlRadio" value="url" v-model="corpgiftSource">
                    <label class="form-check-label" for="corpgiftCodeUrlRadio">URL Value</label>
                </div>
                <input type="text" class="form-control" id="corpgiftCodeSingleVal" placeholder="Type Value" v-if="corpgiftSource === 'single'">
                <select class="form-control" id="corpgiftCodeSelector" v-else-if="corpgiftSource === 'select'">
                    <option>FSH</option>
                    <option>SHR</option>
                    <option>LAL</option>
                </select>
                <input type="text" class="form-control" id="corpgiftCodeUrl" placeholder="Value Informed from URL" v-if="corpgiftSource === 'url'" disabled>
            </div>
        </div>
        <div class="row form-group justify-content-center">
            <div class="col-md-2 text-left">
                <h5>Source Code:</h5>
            </div>
            <div class="col-md-4 text-left">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="sourceCode" id="sourceCodeSingleValRadio" value="single" v-model="sourceCodeSource">
                    <label class="form-check-label" for="campainCodeSingleValRadio">Single Value</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="sourceCode" id="sourceCodeSelectorRadio" value="select" v-model="sourceCodeSource">
                    <label class="form-check-label" for="sourceCodeSelectorRadio">Selector</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="sourceCode" id="sourceCodeUrlRadio" value="url" v-model="sourceCodeSource">
                    <label class="form-check-label" for="sourceCodeUrlRadio">URL Value</label>
                </div>
                <input type="text" class="form-control" id="sourceCodeSingleVal" placeholder="Type Value" v-if="sourceCodeSource === 'single'">
                <select class="form-control" id="sourceCodeSelector" v-else-if="sourceCodeSource === 'select'">
                    <option>FSH</option>
                    <option>SHR</option>
                    <option>LAL</option>
                </select>
                <input type="text" class="form-control" id="sourceCodeUrl" placeholder="Value Informed from URL" v-if="sourceCodeSource === 'url'" disabled>
            </div>
        </div>
        <hr>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h3 class="float-left">Features</h3>
            </div>
        </div>
        <div class="row justify-content-center align-items-center">
            <div class="col-md-2 text-left">
                <h5>Premiums:</h5>
            </div>
            <div class="col-md-4 text-left">
                <label class="switch">
                    <input type="checkbox">
                    <span class="slider"></span>
                </label>
            </div>
        </div>
        <div class="row justify-content-center align-items-center">
            <div class="col-md-2 text-left">
                <h5>Commitments:</h5>
            </div>
            <div class="col-md-1 text-left">
                <label class="switch">
                    <input type="checkbox">
                    <span class="slider"></span>
                </label>
            </div>
            <div class="col-md-2 text-left">
                <h5>Create in CR:</h5>
            </div>
            <div class="col-md-1 text-left">
                <label class="switch">
                    <input type="checkbox">
                    <span class="slider"></span>
                </label>
            </div>
        </div>
        <div class="row justify-content-center align-items-center">
            <div class="col-md-2 text-left">
                <h5>Premium Only:</h5>
            </div>
            <div class="col-md-4 text-left">
                <label class="switch">
                    <input type="checkbox">
                    <span class="slider"></span>
                </label>
            </div>
        </div>
        <div class="row justify-content-center align-items-center">
            <div class="col-md-2 text-left">
                <h5>Prayer Only:</h5>
            </div>
            <div class="col-md-4 text-left">
                <label class="switch">
                    <input type="checkbox">
                    <span class="slider"></span>
                </label>
            </div>
        </div>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'CodeConfiguration',
    data() {
        return {
            campaignSource: 'select',
            appealSource: 'select',
            designationSource: 'select',
            giftSource: 'select',
            corpgiftSource: 'select',
            sourceCodeSource: 'select'
        }
    }
}
</script>

<style lang="sass" scoped>
    /* The switch - the box around the slider */
    .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    }

    /* Hide default HTML checkbox */
    .switch input {display:none;}

    /* The slider */
    .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    }

    .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    }

    input:checked + .slider {
    background-color: #2196F3;
    }

    input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
    border-radius: 34px;
    }

    .slider.round:before {
    border-radius: 50%;
    }
</style>

