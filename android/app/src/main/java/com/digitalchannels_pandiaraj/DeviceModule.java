package com.digitalchannels_pandiaraj;
import android.os.Build;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

public class DeviceModule extends ReactContextBaseJavaModule {
    DeviceModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "DeviceModule";
    }

    @ReactMethod
    public void getDeviceInformation(Promise promise) {
        String information = getHardwareAndSoftwareInfo();
        try{
            promise.resolve(information);
        }catch (Exception e){
            promise.reject("Error",e);
        }
    }

    private String getHardwareAndSoftwareInfo() {
        return "MODEL:" + " " + Build.MODEL + "\n" +
                "ID:" + " " + Build.ID + "\n" +
                "MANUFACTURER:" + " " + Build.MANUFACTURER + "\n" +
                "BRAND:" + " " + Build.BRAND + "\n" +
                "VERSION CODE:" + " " + Build.VERSION.RELEASE;
    }
}