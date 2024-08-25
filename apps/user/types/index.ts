import { ObjectId } from 'bson';
import mongoose from 'mongoose';
import exp from "node:constants";

type arr = {
    trait_type: string;
    value: string;
}

type file = {
    type: string;
    uri: string;
}

type obj = {
    files: file[];
    category: string;
}

export type song = {
    _id: string;
    name: string;
    image: string;
    animation_url: string;
    attributes: arr[];
    properties: obj;
}



export type artist =  {
    _id: string;
    name?: string;
    image?: string;
    desc?: string;
    walletAddress?: string;
    date?: string;
    albums?: album[];
    community?: string;
    earnings?: number;
    plays?: number;
}



type File ={
    type?: string;
    uri?: string;
}

type props =  {
    files?: File[];
    category?: string;
}

export type album = {
    _id: string;
    name?: string;
    image?: string;
    external_url?: string;
    desc?: string;
    creator?: string;
    songs?: song[];
    artists?: string[];
    date?: string;
    properties?: props;
}