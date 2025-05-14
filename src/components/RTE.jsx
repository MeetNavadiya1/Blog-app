import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

export default function RTE({ name, control, label, defaultvalue = "" }) {
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

            <Controller
                name={name || "content"}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor
                        apiKey="zllq7az6lq54b28ertpc5wozwr4ltphha93uzyqgw7qgsu1s"
                        initialValue= {defaultvalue}
                        init={
                            {
                                initialValue: defaultvalue,
                                height: 500,
                                menubar: true,
                                plugins: [
                                    "image","advlist","autolink","list","link","image","charmap","preview","anchor","searchreplace","visualblocks","code","fullscreen","insertdatetime","media","table","code","help","wordcount","anchor"
                                ],
                                toolbar:
                                    'undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
                                content_style: "body {font-family:Helvetice, Arial, sans-serif; font-size:14px}"
                            }
                        }
                        onEditorChange={onChange}
                    />
                )}
            />
        </div>
    )
}