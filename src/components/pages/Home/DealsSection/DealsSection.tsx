import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import IMAGES from '@assets/images/images';
import './DealsSection.scss';

const DealsSection = () => {

    const { t } = useTranslation();

    return (
        <section id='deals_section' className='container_bx'>
            <div className='content_bx'>
                <Swiper
                    cssMode={true}
                    navigation={false}
                    pagination={{
                        clickable: true,
                    }}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                    id='deals_section_slider'
                >
                    <SwiperSlide>
                        <div className='slider_item'>
                            <div className='text'>
                                <h3>{t('deals_title_1')} <br /> {t('deals_title_2')}</h3>
                                <p>
                                    {t('slider_text')}
                                </p>
                                <div className='details_bx'>
                                    <div className='item'>
                                        <span className='num'>768</span>
                                        <span className='data'>{t('days')}</span>
                                    </div>
                                    
                                    <div className='item'>
                                        <span className='num'>01</span>
                                        <span className='data'>{t('hour')}</span>
                                    </div>

                                    <div className='item'>
                                        <span className='num'>27</span>
                                        <span className='data'>{t('mint')}</span>
                                    </div>

                                    <div className='item'>
                                        <span className='num'>55</span>
                                        <span className='data'>{t('sec')}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='slider_img'>
                                <img src={IMAGES.deals_book_1_png} alt='pic' />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='slider_item'>
                            <div className='text'>
                                <h3>{t('deals_title_1')} <br /> {t('deals_title_2')}</h3>
                                <p>
                                    {t('slider_text')}
                                </p>
                                <div className='details_bx'>
                                    <div className='item'>
                                        <span className='num'>768</span>
                                        <span className='data'>{t('days')}</span>
                                    </div>
                                    
                                    <div className='item'>
                                        <span className='num'>01</span>
                                        <span className='data'>{t('hour')}</span>
                                    </div>

                                    <div className='item'>
                                        <span className='num'>27</span>
                                        <span className='data'>{t('mint')}</span>
                                    </div>

                                    <div className='item'>
                                        <span className='num'>55</span>
                                        <span className='data'>{t('sec')}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='slider_img'>
                                <img src={IMAGES.deals_book_1_png} alt='pic' />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='slider_item'>
                            <div className='text'>
                                <h3>{t('deals_title_1')} <br /> {t('deals_title_2')}</h3>
                                <p>
                                    {t('slider_text')}
                                </p>
                                <div className='details_bx'>
                                    <div className='item'>
                                        <span className='num'>768</span>
                                        <span className='data'>{t('days')}</span>
                                    </div>
                                    
                                    <div className='item'>
                                        <span className='num'>01</span>
                                        <span className='data'>{t('hour')}</span>
                                    </div>

                                    <div className='item'>
                                        <span className='num'>27</span>
                                        <span className='data'>{t('mint')}</span>
                                    </div>

                                    <div className='item'>
                                        <span className='num'>55</span>
                                        <span className='data'>{t('sec')}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='slider_img'>
                                <img src={IMAGES.deals_book_1_png} alt='pic' />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default DealsSection