/*
 * @Author: shen
 * @Date: 2021-01-31 13:02:11
 * @LastEditors: shen
 * @LastEditTime: 2021-02-03 08:45:31
 * @Description:
 */

import { computed, defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '@/hooks/useStore'
import { useInject } from '@/hooks/useContext'
import SelectLang from '@/components/SelectLang'
import HeaderSearch from './Search'
import HeaderNotice from './Notice'
import SelectSize from './SelectSize'
import Screenfull from './Screenfull'
import AvatarDropdown from './AvatarDropdown'
import BreadCrumb from './Breadcrumb'

export default defineComponent({
  name: 'Header',
  setup() {
    const route = useRoute()
    const { replace } = useRouter()
    const { getters, dispatch } = useStore()
    const { keyValue, getPrefixCls } = useInject()
    const prefixCls = getPrefixCls('layout__header')
    const username = computed(() => getters.userInfo.username || getters.userInfo.realName)
    const onCommand = async (command: string) => {
      switch (command) {
        case 'logout':
          await dispatch('user/logout')
          replace({ path: '/', query: { redirect: route.path } })
          break
      }
    }
    return () => (
      <>
        <BreadCrumb />
        <div>
          <HeaderSearch class={`${prefixCls}-active-base ${prefixCls}-active-search`} />
          <HeaderNotice class={`${prefixCls}-active-base ${prefixCls}-active-notice`} />
          <Screenfull class={`${prefixCls}-active-base ${prefixCls}-active-fullscreen`} />
          <SelectSize key={`SelectSize${keyValue.value}`} class={`${prefixCls}-active-base ${prefixCls}-active-size`} />
          <AvatarDropdown key={`AvatarDropdown${keyValue.value}`} username={username.value} onCommand={onCommand} />
          <SelectLang key={`SelectLang${keyValue.value}`} class={`${prefixCls}-active-base ${prefixCls}-active-lang`} />
        </div>
      </>
    )
  },
})
