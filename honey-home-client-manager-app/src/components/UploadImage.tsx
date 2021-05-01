import React, { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Upload, message, Form } from 'antd';
import { RcFile } from 'antd/lib/upload/interface';
import { resetImgUrl } from '@/utils/utils';
import { UploadChangeParam } from 'antd/es/upload/interface';

const UploadImage = (props: { coverImage: string; setCoverImage: Function }) => {
  const { coverImage, setCoverImage } = props;
  const [isLoading, setIsLoading] = useState(false);

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info: UploadChangeParam) => {
    // 上传中
    if (info.file.status === 'uploading') {
      setIsLoading(true);
      return;
    }
    // 上传完成
    if (info.file.status === 'done') {
      setCoverImage(info.file.response.data);
      setIsLoading(false);
    }
  };

  const uploadButton = (
    <div>
      {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <Form.Item label="图片">
      <Upload
        name="file"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action={`${BASE_URL}/api/v1/common/upload_file`}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {coverImage ? (
          <img
            src={resetImgUrl(coverImage)}
            alt="图片"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
    </Form.Item>
  );
};

export default UploadImage;
