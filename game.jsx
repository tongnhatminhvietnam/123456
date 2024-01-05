import * as React from 'react';
import { useState } from 'react';
import { Col, Row, Input, Button, Typography, notification } from 'antd';
import Util from 'service/helper/util';
import RequestUtil from 'service/helper/request_util';
import style from './style.module.css';
import { urls } from './config';

const { Title } = Typography;

export default function Game() {
    const [mobile, setMobile] = useState('');
    const [api, contextHolder] = notification.useNotification();

    function handleSubmit() {
        if (!mobile) {
            alert('Vui lòng nhập số điện thoại');
            return;
        }

        Util.toggleGlobalLoading();
        RequestUtil.apiCall(`${urls.check}${mobile}`)
            .then((resp) => {
                const code = resp.data.code;
                api['success']({
                    message: <strong>Mã số may mắn của bạn là</strong>,
                    description: <Title level={2}>{code}</Title>
                });
            })
            .catch((err) => {
                api['error']({
                    message: <strong>Không tìm thấy số điện thoại</strong>,
                    description: (
                        <div>
                            <div>
                                <strong>Bạn không có trong danh sách khách mời</strong>
                            </div>
                            <div>Vui lòng liên hệ với BTC để được hỗ trợ:</div>
                            <ul>
                                <li>
                                    Đào Liên Phương:{' '}
                                    <a href="tel:0983110686">0983110686</a>
                                </li>
                                <li>
                                    Nguyễn Thanh Hiền:{' '}
                                    <a href="tel:0935779989">0935779989</a>
                                </li>
                            </ul>
                        </div>
                    )
                });
            })
            .finally(() => {
                Util.toggleGlobalLoading(false);
            });
    }

    return (
        <div className={style.bg}>
            {contextHolder}
            <div>
                <Row>
                    <Col
                        md={{ span: 12, offset: 6 }}
                        sm={{ span: 20, offset: 2 }}
                        xs={{ span: 22, offset: 1 }}
                    >
                        <br />
                        <br />
                        <div>
                            <Title level={2} style={{ color: 'white' }}>
                                Vui lòng nhập số điện thoại của bạn
                            </Title>
                        </div>
                        <Input
                            placeholder="Nhập số điện thoại vào đây"
                            size="large"
                            value={mobile}
                            onChange={(e) => {
                                setMobile(e.target.value);
                            }}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    handleSubmit();
                                }
                            }}
                        />
                        <br />
                        <br />
                        <Button
                            type="primary"
                            size="large"
                            block
                            onClick={handleSubmit}
                        >
                            Nhận số may mắn
                        </Button>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
