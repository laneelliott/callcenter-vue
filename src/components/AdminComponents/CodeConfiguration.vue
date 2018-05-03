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
                Campaign:
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
                Appeal:
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
                Designation:
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
                Gift Source:
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
                Corp Gift:
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
                Source Code:
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
