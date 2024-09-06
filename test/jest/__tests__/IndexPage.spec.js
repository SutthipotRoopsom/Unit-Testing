import IndexPage from 'src/pages/IndexPage.vue'
import { shallowMount } from '@vue/test-utils'

describe('IndexPage', () => {
  // it('should render correct contents', () => {
  //   const wrapper = shallowMount(IndexPage)
  //   let header = wrapper.find('.htmlClass h1')
  //   expect(header.exists()).toBe(true)
  //   expect(header.text())
  //     .toBe('วิวัฒนาการของโลกสมัยใหม่')
  // });

  // it('ตรวจสอบตัวเเปรชื่อว่า title', () => {
  //   const wrapper = shallowMount(IndexPage, {
  //     data () {
  //       return {
  //         title: 'ฉันรักวิว'
  //       }
  //     }
  //   })
  //   let header = wrapper.find('.htmlClass h1')
  //   expect(header.text()).toBe('ฉันรักวิว')
  // })

  it('ตรวจสอบตัวแปลชื่อว่า StuCode', () => {
    const wrapper = shallowMount(IndexPage, {
      data() {
        return {
          StuCode: '6604101391'
        }
      }
    })
    let StuCode = wrapper.find('.htmlClass h4')
    expect(StuCode.text()).toBe('6604101391')
  })

  it('ตรวจสอบตัวแปลชื่อว่า FirstName', () => {
    const wrapper = shallowMount(IndexPage, {
      data() {
        return {
          FirstName: 'สุทธิพจน์'
        }
      }
    })
    let FirstName = wrapper.find('.htmlClass h1')
    expect(FirstName.text()).toBe('สุทธิพจน์')
  })

  it('ตรวจสอบตัวแปลชื่อว่า SurName', () => {
    const wrapper = shallowMount(IndexPage, {
      data() {
        return {
          SurName: 'รูปโสม'
        }
      }
    })
    let SurName = wrapper.find('.htmlClass h2')
    expect(SurName.text()).toBe('รูปโสม')
  })

  it('ตรวจสอบตัวแปลชื่อว่า NickName', () => {
    const wrapper = shallowMount(IndexPage, {
      data() {
        return {
          NickName: 'ตะวัน'
        }
      }
    })
    let NickName = wrapper.find('.htmlClass h3')
    expect(NickName.text()).toBe('ตะวัน')
  })


})


// test('ทดสอบว่ามีฟอร์ม (form)', () => {
//   const wrapper = shallowMount(IndexPage)
//   expect(wrapper.find('form').exists()).toBe(true)
// })

// test('ทดสอบว่าในฟอร์มมี(form) มีการรับค่า(Input)', () => {
//   const wrapper = shallowMount(IndexPage)
//   expect(wrapper.find('form > input').exists()).toBe(true)
// })

// test('ทดสอบว่ามีปุ่ม (button)', () => {
//   const wrapper = shallowMount(IndexPage)
//   expect(wrapper.find('button').exists()).toBe(true)
// })

// test('ทดสอบว่ามีปุ่ม (button)', () => {
//   const wrapper = shallowMount(IndexPage)
//   expect(wrapper.find('button').exists()).toBe(true)
// })


