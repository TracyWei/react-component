var Example = React.createClass({
    submitHandler:function(data, form) {
        //
        console.dir(data);
    },
    commonFunc : function(e) {
        console.log(e);
    },
    nameCheck : function(value) {
        console.log('namecheck======================= ' + value);
    },
    render:function() {
        var selectData = [
            { key:'请选择', value:0 },
            { key:'管理员', value:1 },
            { key:'编辑', value:2 },
            { key:'审查', value:3 }
        ];

        return <div className="example-form">
            <h2 className="title">表单<span>Form</span></h2>
            <h3 className="sub-title">演示</h3>
            <div className="example">
                <h4 className="final-title">验证</h4>
                <div>
                    <RUI.Form className="horizonal" onSubmit={this.submitHandler}>
                        <RUI.Form.Row>
                            <p style={{paddingBottom:'5px',fontSize:'16px',fontWeight:'bold',borderBottom: "1px dashed #dadada"}}>输入框</p>
                        </RUI.Form.Row>
                        <RUI.Form.Row>
                            <RUI.Form.Control
                                label="倍棒账号："
                                name="name"
                                placeholder="请输入倍棒账号"

                                type="input"
                                remote={{
                                    url:"../../src/js/containers/form/remote.json",
                                    type : 'get',
                                    dataType : 'json',
                                    data : 'key'
                                }}
                                required={true}
                                reg={/^[0-9]+$/}
                                requireMsg="账号不能为空"
                                explain="账号格式不正确"
                                trigger={'onBlur|onChange'}
                                validator={this.nameCheck}
                                validateStatus=""

                            />
                        </RUI.Form.Row>
                        <RUI.Form.Row>
                            <RUI.Form.Control
                                label="手机号："
                                name="phone"
                                placeholder="请输入手机号"

                                type="input"
                                remote=""
                                required={true}
                                reg={'phone'}
                                requireMsg="手机号不能为空"
                                explain="手机号合格不正确"
                                trigger={'onBlur|onChange'}
                                validator={this.phoneCheck}

                            />
                        </RUI.Form.Row>
                        <RUI.Form.Row>
                            <RUI.Form.Control
                                label="QQ："
                                name="phone"

                                type="input"
                                validator={this.QQCheck}
                            />
                        </RUI.Form.Row>

                        <RUI.Form.Row>
                            <RUI.Form.Control
                                desc={{
                                    ldesc : <i className="desc">每人每日有</i>,
                                    rdesc : <i className="desc">抽奖机会</i>
                                }}
                                label="抽奖机会："
                                name="times"
                                wcname="width_80"
                                type="input"
                                reg={'number'}
                                validator={this.timesCheck}
                            />
                        </RUI.Form.Row>

                        <RUI.Form.Row>
                            <RUI.Form.Control
                                desc={{
                                    ldesc : '',
                                    rdesc : <i className="desc"><strong>%</strong> <em className="grey">这意味着每十次抽奖3次获奖</em></i>
                                }}
                                label="获奖概率："
                                name="times"
                                wcname="width_80"
                                type="input"
                                reg={'number'}
                                validator={this.timesCheck}
                            />
                        </RUI.Form.Row>
                        <RUI.Form.Row>
                            <p style={{paddingBottom:'5px',fontSize:'16px',fontWeight:'bold',borderBottom: "1px dashed #dadada"}}>其它</p>
                        </RUI.Form.Row>
                        <RUI.Form.Row>
                            <RUI.Form.Control
                                name="male"
                                label="性别："
                                type="radio"

                                required={true}
                                requireMsg="请选择性别"
                                trigger={'onBlur|onChange'}
                                validator={this.maleCheck}
                                validateStatus=""
                                
                            >
                                <RUI.Radio value="1">男</RUI.Radio>
                                <RUI.Radio value="0">女</RUI.Radio>
                            </RUI.Form.Control>
                        </RUI.Form.Row>

                        <RUI.Form.Row>
                            <RUI.Form.Control
                                name="password"
                                label="密码："
                                placeholder="请输入密码"

                                type="password"
                                required={true}
                                reg={'pass'}
                                requireMsg="密码不能为空"
                                explain="密码为数组、英文字母组合"
                                trigger={'onBlur|onChange'}
                                validator={this.psCheck}
                                validateStatus=""
                            />
                            <RUI.Form.Control
                                name="cpassword"
                                label="确认密码："
                                placeholder="请确认密码"

                                type="password"
                                required={true}
                                reg={'pass'}
                                requireMsg="密码不能为空"
                                explain="密码为数组、英文字母组合"
                                trigger={'onBlur|onChange'}
                                validator={this.rpsCheck}
                                validateStatus=""
                            />
                        </RUI.Form.Row>
                        <RUI.Form.Row>
                            <RUI.Form.Control
                                name="interest"
                                label="兴趣："

                                type="checkbox"
                                required={true}
                                requireMsg="请选择兴趣"
                                trigger={'onChange'}
                                validator={this.interestCheck}
                                validateStatus=""
                            >
                                <RUI.Checkbox value="1" selected={'1'}>科技</RUI.Checkbox>
                                <RUI.Checkbox value="2">摄影</RUI.Checkbox>
                                <RUI.Checkbox value="3">旅游</RUI.Checkbox>
                                <RUI.Checkbox value="4">娱乐</RUI.Checkbox>
                            </RUI.Form.Control>
                        </RUI.Form.Row>
                        <RUI.Form.Row>
                            <RUI.Form.Control
                                name="role"
                                label="角色："

                                type="select"
                                /*required={true}*/
                                requireMsg="请选择角色"
                                stuff={true}
                                trigger={'onChange'}
                                validator={this.commonFunc}
                                validateStatus=""
                                data={selectData}
                            />
                        </RUI.Form.Row>
                        {/*
                         <RUI.Form.Row>
                         <RUI.Form.Control
                         name="cover"
                         label="上传封面："

                         type="upload"
                         required={true}


                         multiple={true}
                         autoUpload={true}
                         action="http://image.berbon.com/image/upload/base64zoom"
                         actionData={function(){}}
                         onUploadComplete={function(){}}
                         editable={{
                         aspectRatio:1
                         }}
                         />
                         </RUI.Form.Row>
                        */}
                        <RUI.Form.Row>
                            <RUI.Form.Submit>保存</RUI.Form.Submit>
                            <RUI.Form.Reset>重置</RUI.Form.Reset>
                        </RUI.Form.Row>
                    </RUI.Form>
                </div>
            </div>
            <h3 className="sub-title">源码</h3>
            <div className="source">
                <textarea defaultValue={require('raw!./form.js')} />
            </div>
        </div>;
    }
});

module.exports = Example;