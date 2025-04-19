import { getProductListApi } from '../../../Services/BackendHelper';
import {getProductlist,getProductlistSucess,getProductlistFailure} from '.././Store/Action'
import {takeLatest, put, call} from 'redux-saga/effects';
import BleManager from 'react-native-ble-manager'


function* getProductList(action) {
    try {
      const response = yield call(getProductListApi())
      if(response.success){
        yield put(getProductlistSucess(response))

      }
      else{
        yield put (getProductlistFailure(response))
      }
    } catch (error) {
      yield put(getProductlistFailure(error))
    }
  } 